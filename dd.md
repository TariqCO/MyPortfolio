  // Form State
  const [flipName, setFlipName] = useState("");
  const [frameType, setFrameType] = useState("square");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("flipName", flipName);
      formData.append("frameType", frameType);

      images.forEach((file) => formData.append("images", file));

      const response = await createFliper(formData);

      console.log("Created Flip:", response);
      alert("Flip Created Successfully!");

      // Reset form
      setFlipName("");
      setFrameType("square");
      setImages([]);
    } catch (error) {
      console.error("Error creating flip:", error);
      alert("Error creating flip!");
    } finally {
      setLoading(false);
    }
  };