import NoteDetail from "./NoteDetail";

function MenuContent({ selected, randomNote }) {
  return (
    <div style={styles.container}>
      <h2>{selected}</h2>
      {selected === "Notes" && (
        <div style={{ marginTop: "20px" }}>
          <NoteDetail note={randomNote} />
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    minHeight: "200px"
  }
};

export default MenuContent;
