"use client"
export default function Peli({ peli }) {
    return (
        <div className="bg-white shadow p-4 rounded-md m-1">
            <img src={`https://image.tmdb.org/t/p/w500${peli.poster_path}`} />
            <h1 className="text-xl font-bold line-clamp-3">{peli.title}</h1>
            <p className="text-xs line-clamp-6">{peli.overview}</p>
        </div>
    );
}
