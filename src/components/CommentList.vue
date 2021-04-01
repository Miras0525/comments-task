<template>
	<div class="card text-center m-3">
		<div class="card-header d-flex justify-content-between">
			<h4>Список комментариев</h4>
			<b-button variant="success" @click="comment_active = true;">Добавить</b-button>
		</div>

		<comment 
			:comments="comments"
		>
			<template #add_comment>
				<b-input-group v-if="comment_active" prepend="Ваш комментарий" class="mb-2">
					<b-form-textarea v-model="comment_value"/>
					<b-button variant="success" @click="addComment">+</b-button>
				</b-input-group>
			</template>
		</comment>
	</div>
</template>

<script>
	import Comment from './Comment'
	const comments = [...Array(15).keys()].map(i => ({ id: i, reply: null, name:(i+1)+'. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat sunt qui cum eum odit at minus fugit error in voluptate.', date: '3 days ago' }));

	export default {
		components:{
			Comment
		},
		data() {
			return {
				comments,
				comment_value: '',
				comment_active: false
			};
		},
		methods: {
			addComment(){
				let comment_value = { id: this.comments.length+1, name:`${(this.comments.length+1)}. ${this.comment_value}`, date: '3 days ago' };

				this.comments.push(comment_value);
				this.comment_active = false;
				this.clearAction();
			},
			clearAction(){
				this.comment_value = '';
			}
		}
	};
</script>