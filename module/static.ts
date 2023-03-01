import { Application } from "https://deno.land/x/oak/mod.ts";
const app = new Application();

app.use(async (context, next) => {
  try {
    await context.send({
      root: `${Deno.cwd()}/web/dist`,
      index: "index.html",
    });
  } catch {
    await next();
  }
});
export async function listen(){
    console.log(`开启服务完毕端口为${19198}`)
    await app.listen({ port: 19198 });
}
