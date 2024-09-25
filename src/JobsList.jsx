export function JobsList(props) {
  return (
    <div id="jobs-list">
    <br />
    <a onClick={()=>props.onJobSelect("Babysitting")}>Babysitting</a>
    <br />
    <br />
    <a onClick={()=>props.onJobSelect("Pet Walking")}>Pet Walking</a>
    <br />
    <br />
    <a onClick={()=>props.onJobSelect("Organizing")}>Organizing</a>
    <br />
    <br />
    <a onClick={()=>props.onJobSelect("Plant Care")}>Plant Care</a>
    <br />
    <br />

    </div>
  );
}