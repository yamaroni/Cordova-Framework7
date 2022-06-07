"user strict"
const viewModel = [{
    path: '/',
    componentUrl: `./pages/main.html?v=${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}`,
}, {
    path: '/features/statusbar/',
    componentUrl: `./pages/features/statusbar.html?v=${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}`,
}]