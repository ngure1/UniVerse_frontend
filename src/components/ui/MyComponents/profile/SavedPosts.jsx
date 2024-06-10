import PostImage from "@/../public/images/postImage.png";
import PostCard from "@/components/ui/MyComponents/PostCard";

const SavedPosts = () => {
	return (
		<div className="grid grid-cols-2 gap-2 w-full">
			<PostCard
				date="1 Month Ago"
				content="Exploring the intersection of technology, design, and innovation, our blog offers insights, tips, and  .....Read More"
				postImage={PostImage}
			/>
			<PostCard
				date="1 Month Ago"
				content="Exploring the intersection of technology, design, and innovation, our blog offers insights, tips, and  .....Read More"
				postImage={PostImage}
			/>
			<PostCard
				date="1 Month Ago"
				content="Exploring the intersection of technology, design, and innovation, our blog offers insights, tips, and  .....Read More"
				postImage={PostImage}
			/>
			<PostCard
				date="1 Month Ago"
				content="Exploring the intersection of technology, design, and innovation, our blog offers insights, tips, and  .....Read More"
				postImage={PostImage}
			/>
		</div>
	);
};

export default SavedPosts;
