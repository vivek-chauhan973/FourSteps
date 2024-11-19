import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AdminLayout from "@/Component/admin/AdminLayout";
import Image from "next/image";

const EditUser = () => {
  const router = useRouter();
  const { userid } = router.query;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    description: "",
    jobProfile: "",
    image: null,
    alt: "",
  });

  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (userid) {
      const fetchUser = async () => {
        const response = await fetch(`/api/user/user?id=${userid}`);
        if (response.ok) {
          const userData = await response.json();
          setFormData({
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
            role: userData.role,
            description: userData.description,
            jobProfile: userData.jobProfile,
            image: userData.image,
            alt: userData.alt,
          });
          setImagePreview(userData.image?.path || null);
        }
      };
      fetchUser();
    }
  }, [userid]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        image: files[0],
      }));
      setImagePreview(URL.createObjectURL(files[0]));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("role", formData.role);
    form.append("description", formData.description);
    form.append("jobProfile", formData.jobProfile);
    form.append("alt", formData.alt);

    if (formData.image && typeof formData.image !== "string") {
      form.append("image", formData.image);
    }

    const response = await fetch(`/api/user/user?id=${userid}`, {
      method: "PUT",
      body: form,
    });

    if (response.ok) {
      alert("User updated successfully!!!!!!!!!!!!!!!!!!!!!");
      router.push("/admin/demovideo/videomaker/listing-user");
    } else {
      alert("Failed to update user.");
    }
  };

  return (
    <AdminLayout>
      <div>
        <h2>Edit User</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Role</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Upload Image</label>
            <input type="file" name="image" onChange={handleChange} />
          </div>
          {imagePreview && (
            <Image src={imagePreview} alt="Preview" width={100} height={100} />
          )}
          <div>
            <label>Alt Text</label>
            <input
              type="text"
              name="alt"
              value={formData.alt}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Update User</button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default EditUser;
