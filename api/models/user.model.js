import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true,
      unique:true,
   },
   email: {
      type: String,
      required: true,
      unique:true,
   },
   password: {
      type: String,
      required: true,
   },
   avatar:{
      type: String,
      default: "https://images.search.yahoo.com/images/view;_ylt=AwrFSUh6Z9FnfT4zDiqJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzhhNDYxNzg4N2E4NjJmNTI4M2IxYzRiYjQ4ZmJjZjBhBGdwb3MDMTQEaXQDYmluZw--?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dprofile%2Bpic%26type%3DE210US91215G0%26fr%3Dmcafee%26h%3D1024%26tt%3D%2522profile%2Bcircle%2522%2BIcon%2B-%2BDownload%2Bfor%2Bfree%2B%25E2%2580%2593%2BIconduck%26w%3D1023%26imgurl%3Dhttps%253A%252F%252Fstatic-00.iconduck.com%252Fassets.00%252Fprofile-circle-icon-1023x1024-ucnnjrj1.png%26rurl%3Dhttps%253A%252F%252Ficonduck.com%252Ficons%252F180867%252Fprofile-circle%26turl%3Dhttps%253A%252F%252Ftse1.mm.bing.net%252Fth%253Fid%253DOIP.7dTfyRneXPY5b7pj0NKuUgHaHa%2526pid%253DApi%26tw%3D474%26th%3D474%26sigr%3Dgs4N5ewvZs0c%26sigi%3DCAp4r57FQtD8%26sigt%3DdPYCXQh.D4AZ%26sigit%3D5pAm6SrEui._%26tab%3Dorganic%26ri%3D14&w=900&h=900&imgurl=i.pinimg.com%2Foriginals%2Fc0%2F27%2Fbe%2Fc027bec07c2dc08b9df60921dfd539bd.webp&rurl=https%3A%2F%2Fnl.pinterest.com%2Fpin%2Fdownload-blank-default-pfp-wallpaper--757308493613040301%2F&size=3KB&p=profile+pic&oid=8a4617887a862f5283b1c4bb48fbcf0a&fr2=&fr=mcafee&tt=Download+Blank+Default+Pfp+Wallpaper+%7C+Wallpapers.com+%7C+Fb+profile+...&b=0&ni=140&no=14&ts=&tab=organic&sigr=qO83XxtKZDZn&sigb=3BuAmE172O73&sigi=Qv9U3AndavoD&sigt=o_mjTfQ2071S&.crumb=cUjDXu6m8.d&fr=mcafee&type=E210US91215G0"
   }

},{timestamps:true});

const User = mongoose.model('User',userSchema)

export default User;