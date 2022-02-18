export default function Tab({tablength, activeIndex, changeIndex}) {
    const buttons =[]
    const tabword=['First', 'Second', 'Third', 'Fourth', 'Fifth']
    for (var i =0; i<tablength; i++) {
        buttons.push(
        <button onClick={changeIndex} key={i} className={`${activeIndex==i && 'active'}`}>{tabword[i]} tab</button>
);
    }
    return (<> {buttons} </>);
}
