function AddItem() {
  return (
    <div className="addItem-wrap">
      <p>Add to list</p>
      <form>
        <input type="text" />
        <button className="add-btn">
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>
    </div>
  );
}

export default AddItem;
