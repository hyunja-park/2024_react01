
// Children 은 React 컴포넌트의 특수한 props이다.
// 컴포턴트 태그 안에 전달된 내용을 포함한다.
// 여는 태그와  닫는 태그 사이에 있는 내용을 나타낸다.
// 동적인 내용을 전달할 수 있다.
function AlertButten({message, Children}) {
    return (
        <button onClick={()=>alert(message)}>
            {Children}
        </button>
    );
}

function Event02(props) {
    return (
        <div>
            <AlertButten message="play">PlayButten</AlertButten>
            <AlertButten message="upload">UploadButten</AlertButten>
        </div>
    );
}

export default Event02;