export const randomName = () => {
    return `${new Date().getTime()}_${Math.ceil(Math.random() * 100000)}`.slice(5)
}