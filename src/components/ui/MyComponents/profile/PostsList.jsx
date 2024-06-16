import PostImage from "@/../public/images/postImage.png";
import PostCard from "@/components/ui/MyComponents/cards/PostCard";

const PostsList = () => {
	return (
		<div className="grid grid-cols-2 w-full gap-y-2">
			<PostCard
				forProfile
				date="1 Month Ago"
				content="Exploring the intersection of technology, design, and innovation, our blog offers insights, tips, and  .....Read More"
				postImage={PostImage}
			/>
			<PostCard
				forProfile
				date="1 Month Ago"
				content="Exploring the intersection of technology, design, and innovation, our blog offers insights, tips, and  .....Read More"
				postImage={PostImage}
			/>
			<PostCard
				forProfile
				date="1 Month Ago"
				content="Exploring the intersection of technology, design, and innovation, our blog offers insights, tips, and  .....Read More"
				postImage={PostImage}
			/>
			<PostCard
				forProfile
				date="1 Month Ago"
				content="Exploring the intersection of technology, design, and innovation, our blog offers insights, tips, and  .....Read More"
				postImage={PostImage}
			/>
		</div>
	);
};

export default PostsList;
