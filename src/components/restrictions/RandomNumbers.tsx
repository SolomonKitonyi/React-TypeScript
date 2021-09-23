type RandomNumberType = {
    value: number
}
type isPositive = RandomNumberType & {
    isPositive: boolean,
    isNegative?:never,
    isZero?: never
}
type isNegative = RandomNumberType & {
    isNegative: boolean,
    isPositive?:never,
    isZero?: never
}
type isZero = RandomNumberType & {
    isZero: boolean,
    isNegative?:never,
    isPositive?: never
}
type RandomNumberProps = isNegative | isPositive | isZero
export const RandomNumbers = ({
    value,
    isPositive,
    isNegative,
    isZero
}:RandomNumberProps) => {
    return (
        <div>
        {value} {isPositive && 'Positive'} {isNegative && 'Negative'} {" "} {isZero && 'zero'}
        </div>
    );
}