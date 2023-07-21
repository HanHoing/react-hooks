##

function 실행 → 누군가 element 클릭했을시
- sayHello가진 useClick이 Mount 되었을 때, click이벤트 추가해줌
- update무관 Why? useEffect( , []) 때문에
- final
    - function return: componentWillUnMount로부터 호출됨
    - click event 추가: component Mount때 (componentDidMount시 한번 호출)