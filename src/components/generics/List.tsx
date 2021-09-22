type listProps<T> = {
    items: T[],
    onClick: (value: T) => void
}

//You can add <T extends string | number 
//Also you can add <T extens {id: number}> This ensures id is passed
export const List = <T extends {}>({items,onClick}: listProps<T>) => {
    return (
        <div>
            <h2>List items</h2>
            {items.map((item,index) => {
                return (
                    <div key={index} onClick={() => onClick(item)}>
                        {item}
                    </div>
                );
            })}
        </div>
    );
}