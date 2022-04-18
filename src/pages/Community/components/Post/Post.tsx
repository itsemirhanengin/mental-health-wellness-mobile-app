import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from '../../../../lib/components'
import { IconComments, IconLike, IconShare } from './icons'

type Props = {
  user: {
    avatar: any
    fullName: string
  }
  content: string
  since: string
  likes: number
  comments: number
  isLiked: boolean
}

const Post: React.FC<Props> = ({
  user,
  since,
  content,
  likes,
  comments,
  isLiked,
}) => (
  <View style={styles.container}>
    <View style={styles.avatar}>
      <Image source={user.avatar} />
    </View>

    <View style={styles.body}>
      <View style={styles.heading}>
        <Text style={styles.name}>{user.fullName}</Text>

        <Text style={{ color: '#707070' }}>・</Text>

        <Text style={styles.since}>{since}</Text>
      </View>

      <Text style={styles.content}>{content}</Text>

      <View style={styles.footer}>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.item}>
            <View style={styles.icon}>
              <IconLike color={isLiked ? '#FE8235' : '#D6CCC6'} />
            </View>

            {likes > 0 && <Text style={styles.count}>{likes}</Text>}
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <View style={styles.icon}>
              <IconComments />
            </View>

            {comments > 0 && <Text style={styles.count}>{comments}</Text>}
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <View style={styles.icon}>
              <IconShare />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    flexDirection: 'row',
    borderBottomColor: 'rgba(217, 216, 216, 0.3)',
    borderBottomWidth: 1,
  },

  body: {
    flex: 1,
    paddingLeft: 16,
  },

  avatar: {},

  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginBottom: 4,
  },

  name: {
    fontSize: 14,
    lineHeight: 18,
    color: '#573926',
    fontWeight: '600',
  },

  since: {
    fontSize: 12,
    color: '#707070',
    lineHeight: 18,
    fontWeight: '500',
  },

  content: {
    fontSize: 13,
    lineHeight: 18,
    color: '#573926',
    marginBottom: 16,
    paddingRight: 10,
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 28,
  },

  icon: {
    marginRight: 6,
  },

  count: {
    fontSize: 13,
    color: '#707070',
    lineHeight: 20,
    fontWeight: '500',
  },
})

export default Post
