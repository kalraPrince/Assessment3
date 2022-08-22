function AddMovie(){
    return (<div><form>
        <div className='login-form'>
            <input type='text' placeholder='Title' />
            <br />
            <input type='text' placeholder='Release Date'/>
            <br />
            <button className='btn btn-primary' >
                Add
            </button>
        </div>
    </form></div>)
}
export default AddMovie;