import User from "../models/userModel";

export const getUserByEmail = async (email: string) => {
    return await User.findOne({ email });
}

export const getUserById = async (id: string) => {
    return await User.findById(id).select("-password");
}

export const addUser = async ({name, email, password}: {name: string; email: string; password: string}) => {
    const user = new User({
      name,
      email,
      password,
    });

    return await user.save();
}


