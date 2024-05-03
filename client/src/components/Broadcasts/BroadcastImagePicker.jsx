export default function BroadcastImagePicker({ images, selectedImage, onSelect }) {
    return (
      <div id="image-picker">
        <p>Select an image</p>
        <ul>
          {images.map((image) => (
            <li
              key={image.path}
              onClick={() => onSelect(image.path)}
              className={selectedImage === image.path ? 'selected' : undefined}
            >
              <img
                src={`/hidden/broadcast/${name}.png`}
                alt={image.caption}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }