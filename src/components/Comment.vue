<template>      
	<div class="card-body">
		<b-list-group>
			<slot name='add_comment'/>
			<b-list-group-item href="#" class="flex-column align-items-start px-4 pt-1 comment-item" v-for="(comment, index) in page_of_items" :key="index">
			<div class="d-flex w-100 justify-content-end align-items-center">
				<small class="mr-1">3 days ago</small>

				<b-button 
					class="mr-1" 
					variant="secondary" 
					size="sm" 
					@click="comment_reply = index"
				>
					<b-icon-reply></b-icon-reply>
				</b-button>

				<b-button 
					variant="danger" 
					size="sm" 
					@click="deleteComment(comment.id)"
				>
					<b-icon-trash></b-icon-trash>
				</b-button>
			</div>

			<div class="d-flex align-items-center">
				<img class="mr-2" width="40" height="40" src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png" alt="">
				<div >
					<p class="mb-1">
						{{ comment.name }}
					</p>
				</div>
			</div>

			<b-input-group v-if="comment_reply === index" prepend="Ваш ответ" class="mt-2">
				<b-form-textarea v-model="reply_text"/>
				<b-button 
					variant="success" 
					@click="addReply(comment.id)"
				>
					Ответить
				</b-button>
			</b-input-group>

			<div v-if="comment.reply">
				<div class="d-flex align-items-center ml-5">
					<img class="mr-2" width="25" height="25" src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png" alt="">
					<div >
						<p class="mb-1">
							{{ comment.reply.text }}
						</p>
					</div>
				</div>
			</div>
			</b-list-group-item>
		</b-list-group>

		<div class="pb-0 pt-3">
				<jw-pagination 
					:labels="custom_labels" 
					:items="comments" 
					@changePage="onChangePage"
				></jw-pagination>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.comment-item:last-child {
		padding-bottom: 20px!important;
	}
</style>

<script>
	import Vue from 'vue';

	export default {
		data() {
			return {
				comment_reply: -1,
				reply_text: '',
        page_of_items: [],
				custom_labels: {
					first: '<<',
					last: '>>',
					previous: '<',
					next: '>'
				}
			}
		},
		props: {
			comments: {
				type: Array,
				default(){
					return [];
				}
			}
		},
		methods: {
			onChangePage(page_of_items) {
					this.page_of_items = page_of_items;
			},
			deleteComment(index){
				if(this.comment_reply != -1) return;
				this.comments.splice(index, 1);
			},
			addReply(index){
				let comments = this.comments;
					comments[index].reply = {
					text: this.reply_text
				};
				Vue.set(this.$data, 'comments', comments);
				this.reply_text = '';
				this.comment_reply = -1;
			}
		}
	};
</script>