export default function timestamp(string: number): string {
    const date = new Date(string * 1000)

    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })
}
