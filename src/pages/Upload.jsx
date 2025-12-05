import { Link } from "react-router-dom";
import { useState } from 'react';

export default function Upload() {
    // state to store the file to be uploaded (initially null)
    const [selectedFile, setSelectedFile] = useState(null);

    // state to store the image preview (initially temporary URL)
    const [previewURL, setPreviewUrl] = useState(null);

    // function that runs when the user picks a file from their computer
    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            setSelectedFile(file);
            // Create a temp url for image to immediately preview (?)
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    return (
        <div className="min-h-screen bg-base-200 p-8">
            {/* Back button */}
            <div classname="mb-8">
            <Link to="/" className="btn btn-ghost text-xl">
                Back to Closet
            </Link>
            </div>

            {/* Upload form & Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Upload */}
                <div className="card bg-base-100 shadow-xl p-6">
                    <h2 className="text-2xl font-bold mb-4">Add New Item</h2>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Pick a photo</span>
                        </label>
                        <input
                            type="file" //this is the trigger that opens the file window on computer
                            className="file-input file-input-bordered w-full file-input-primary"
                            onChange={handleFileChange}
                        />
                    </div>
                </div>
                //need to add the submit button
          
        

                {/* Preview */}
                <div className="card bg-base-100 shadow-xl p-6 flex items-center justify-center">
                    //if previewUrl has a value then use that, else display temp text
                    {previewURL? (
                        <img src={previewURL} alt="Preview" className="max-h-96 rounded-lg object-contain" />
                    ):(
                        <div className="text-center text-gray-400 border-2 border-dashed border-gray-300 rounded-lg p-12">
                            <p>No image selected yet</p>
                        </div>
                    )}        
                </div>
            </div>

        </div>
    )
}
    

