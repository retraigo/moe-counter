import { HandlerContext } from "$fresh/server.ts";

import { generate } from "../../../utils/generate.ts";

interface RepoData {
  stargazers_count: number;
  size: number;
  watchers_count: number;
  forks_count: number;
  open_issues_count: number;
  forks: number;
  open_issues: number;
  watchers: number;
}

interface UserData {
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
}

export const handler = async (
  req: Request,
  ctx: HandlerContext,
): Promise<Response> => {
  const name = ctx.params.name;
  let theme = new URL(req.url).searchParams.get("theme");
  if (!theme) theme = "gelbooru";
  let n = 0;
  switch (ctx.params.data) {
    case "stars": {
      const res = await fetch(`https://api.github.com/users/${name}/repos?per_page=100`);
      if (res.status == 200) {
        n = await res.json().then((x) =>
          (x as RepoData[]).reduce(
            (acc: number, repo) => acc + repo.stargazers_count,
            0,
          )
        );
      }
      break;
    }
    case "followers": {
      {
        const res = await fetch(`https://api.github.com/users/${name}`);
        if (res.status == 200) {
          n = await res.json().then(x => (x as UserData).followers)
        }
        break;
      }
    }
    case "following": {
      const res = await fetch(`https://api.github.com/users/${name}`);
      if (res.status == 200) {
        n = await res.json().then(x => (x as UserData).following)
      }
      break;
    }
    case "gists": {
      const res = await fetch(`https://api.github.com/users/${name}`);
      if (res.status == 200) {
        n = await res.json().then(x => (x as UserData).public_gists)
      }
      break;
    }
    case "repos":
    default: {
      const res = await fetch(`https://api.github.com/users/${name}`);
      if (res.status == 200) {
        n = await res.json().then(x => (x as UserData).public_repos)
      }
      break;
    }
  }
  return new Response(generate(n, theme), {
    headers: {
      "Content-Type": "image/svg+xml",
      "cache-control": "max-age=0, no-cache, no-store, must-revalidate",
    },
  });
};
