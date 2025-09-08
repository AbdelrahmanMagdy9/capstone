export default function MusicUploader({ onMusicUpload }) {
  return (
    <div className="text-center mt-4">
      <label htmlFor="music-upload" className="cursor-pointer text-slate-400 hover:text-white">
        Select Music (.mp3)
      </label>
      <input
        id="music-upload"
        type="file"
        accept=".mp3"
        className="hidden"
        onChange={onMusicUpload}
      />
    </div>
  );
}