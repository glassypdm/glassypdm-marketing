import { turso } from "@/lib/turso"

export async function GET(
    request: Request,
    { params }: { params: { target: string, version: string } }
  ) {
    const target = params.target
    const version = params.version
    console.log(target)
    console.log(version)
    if(!parseSemVer(version).valid || target != "windows") {
      return new Response(null, { status: 204 })
    }

    try {
      let results = await turso.execute({
        sql: "SELECT * FROM release WHERE target = ? ORDER BY release_id DESC LIMIT 1",
        args: ["windows"]
      });
      if(results.rows.length == 0) {
        return new Response(null, { status: 204 })
      }

      let client: SemVer = parseSemVer(version)
      let server: SemVer = parseSemVer(results.rows[0].semver_string as string)
      if(!client.valid || !server.valid) {
        return new Response(null, { status: 204 })
      }

      console.log({
        "version": results.rows[0].semver_string,
        "url": results.rows[0].utfs,
        "signature": results.rows[0].signature
      })
      return Response.json(
        {
          "version": results.rows[0].semver_string,
          "url": results.rows[0].utfs,
          "signature": results.rows[0].signature
        },
        { status: 200 }
      );

    } catch(err) {
      console.log("caught error")
      console.error(err)
      return new Response(null, { status: 204 })
    }
  }

  interface SemVer {
    valid: boolean
    major: number,
    minor: number,
    patch: number,
  }

  function parseSemVer(str: string) {
    let output: SemVer = { valid: true, major: 0, minor: 0, patch: 0};

    const numbers = str.split('.')
    if(numbers.length != 3) {
      output.valid = false;
      return output;
    }
    output.major = Number.parseInt(numbers[0])
    output.minor = Number.parseInt(numbers[1])
    output.patch = Number.parseInt(numbers[2])
    if(
      Number.isNaN(output.major) ||
      Number.isNaN(output.minor) ||
      Number.isNaN(output.patch)
    ) {
      output.valid = false;
    }
    return output;
  }