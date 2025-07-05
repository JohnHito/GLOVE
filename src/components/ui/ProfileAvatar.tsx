import React from "react";

interface ProfileAvatarProps {
  src?: string; // URL de la foto de perfil
  alt?: string;
  size?: number; // tamaño en px
}

const DEFAULT_AVATAR = "/imgs/default_avatar.png"; // Debe existir en public/imgs/

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ src, alt = "Foto de perfil", size = 40 }) => {
  return (
    <div
      className="rounded-full bg-white flex items-center justify-center overflow-hidden border border-gray-300"
      style={{ width: size, height: size }}
    >
      <img
        src={src || DEFAULT_AVATAR}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        loading="lazy"
        //onClick={() => setShowPdfPopup(true)}
      />
    </div>
  );
};

export default ProfileAvatar;
