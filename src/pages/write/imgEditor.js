import { useState } from "react";

export default function ImageEditor({ value, index, remove, onUpdate }) {
    console.log("ImageEditor");

    const [base64Image, setBase64Image] = useState(value.image || "");

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setBase64Image(reader.result);
            onUpdate(index, { image: reader.result });
        };
        reader.onerror = (error) => console.error("Error reading file: ", error);

        event.target.value = ""; // Clear the input after upload
    };

    return (
        <div>
            <button className="border border-red-400 p-2 rounded" onClick={() => remove(index)}>
                Remove
            </button>{" "}
            {index}

            <div className="border border-green-200 p-4 flex flex-col items-center gap-2">
                <input type="file" accept="image/png, image/jpeg, image/jpg, image/webp" onChange={handleImageUpload} />
                
                {base64Image && (
                    <img src={base64Image} className="w-[500px] h-[350px] object-cover border border-gray-300" alt="Preview" />
                )}

                <input
                    type="text"
                    className="border p-2 w-full"
                    placeholder="Enter Image Link"
                    value={value.link}
                    onChange={(e) => onUpdate(index, { link: e.target.value })}
                />

                <input
                    type="text"
                    className="border p-2 w-full"
                    placeholder="Enter Button Text"
                    value={value.btn}
                    onChange={(e) => onUpdate(index, { btn: e.target.value })}
                />

                {value.link && value.btn && (
                    <a href={value.link} target="_blank" rel="noopener noreferrer">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">{value.btn}</button>
                    </a>
                )}
            </div>
        </div>
    );
}
