export interface User {
  fullName: string;
  email: string;
  photoUrl?: string;
  isLoggedIn?: boolean;
  isLoggedBy?: "email" | "social";
}


export interface IFullUser extends User {
  imageUrl?: string
  primaryEmailAddress?: {
    emailAddress: string
  }
}