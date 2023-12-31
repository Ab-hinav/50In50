
export default function RepoList({ num, data }) {

    if (num == 0) {
        return <p> No public Repo found !</p>
    }

    console.log(data.map((d, r) => d));

    const content = data.map((dat, i, arr) => {
        if (i < 10)
            return <div className="bg-secondary px-1 rounded inline-block" key={i} >{dat.name}</div>
        else
            return;
    })

    return <div className="mt-2 flex-wrap space-x-2 space-y-1 items-center justify-center " > {content}</div>
}