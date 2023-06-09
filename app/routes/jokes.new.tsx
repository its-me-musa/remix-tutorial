
export default function NewJokeRoute() {
    return (
        <div>
            <p>Add your own hilarious Joke</p>
            <form method="post">
                <div>
                    <label>
                        Name: <input type="text" name="name"/>
                    </label>
                </div>
                <div>
                    <label>
                        Content: <textarea name="name"/>
                    </label>
                </div>
                <div>
                    <button type="submit" className="button">
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}