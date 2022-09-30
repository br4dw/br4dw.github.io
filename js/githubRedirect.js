let contributors = document.querySelectorAll('.contributor')

contributors.forEach(contributor => {
    contributor.addEventListener('click', redirect)
})

function redirect() {
    let githubProfile = this.dataset.github
    if (!githubProfile) return
    window.open(`https://github.com/${githubProfile}`)
}