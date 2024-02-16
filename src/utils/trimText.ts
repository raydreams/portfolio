export default function trimText(string: string, amount: number): string {
    return string.length > amount ? string.slice(0, amount) + '..' : string
}
