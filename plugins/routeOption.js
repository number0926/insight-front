export default async ({ app, next }) => {
  app.router.afterEach((to, from) => {
    // ページ遷移ごとに行いたい処理
    if (!localStorage.getItem('user')) {
      next({ path: '/' })
    }
  })
}
