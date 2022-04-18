import React from 'react'
import { StyleSheet, Text } from 'react-native'

import { Page, Section, TouchableOpacity } from '../../lib/components'
import { Post } from './components'
import { IconPen } from './icons'

const Community: React.FC = () => (
  <>
    <Page>
      <Section padding={0}>
        <Section style={styles.heading}>
          <Text style={styles.title}>Wellness Hub</Text>
        </Section>

        <Section scrollable horizontal style={styles.categories}>
          <TouchableOpacity
            style={[styles.category, { backgroundColor: '#FE8235' }]}
          >
            <Text
              style={[
                styles.categoryName,
                { color: '#FBFBFB', fontWeight: '600' },
              ]}
            >
              Trending
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.category}>
            <Text style={styles.categoryName}>Relationship</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.category}>
            <Text style={styles.categoryName}>Self Care</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.category}>
            <Text style={styles.categoryName}>Self Care</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.category}>
            <Text style={styles.categoryName}>Self Care</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.category}>
            <Text style={styles.categoryName}>Self Care</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.category}>
            <Text style={styles.categoryName}>Self Care</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.category}>
            <Text style={styles.categoryName}>Self Care</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.category}>
            <Text style={styles.categoryName}>Self Care</Text>
          </TouchableOpacity>
        </Section>

        <Section>
          <Post
            user={{
              avatar: require('../../lib/assets/avatar-4.png'),
              fullName: 'Coal Dingo',
            }}
            content="Is there a therapy which can cure crossdressing & bdsm compulsion?"
            since="just now"
            likes={2}
            comments={3}
            isLiked
          />

          <Post
            user={{
              avatar: require('../../lib/assets/avatar-5.png'),
              fullName: 'Pigeon Car',
            }}
            content="Is there a therapy which can cure crossdressing & bdsm compulsion?"
            since="1 min ago"
            likes={279}
            comments={65}
            isLiked
          />

          <Post
            user={{
              avatar: require('../../lib/assets/avatar-6.png'),
              fullName: 'Pigeon Car',
            }}
            content="Is there a therapy which can cure crossdressing & bdsm compulsion?"
            since="2 min ago"
            likes={200}
            comments={727}
            isLiked
          />
        </Section>
      </Section>
    </Page>

    <TouchableOpacity style={styles.button}>
      <IconPen />
    </TouchableOpacity>
  </>
)

const styles = StyleSheet.create({
  heading: {
    marginBottom: 20,
  },

  title: {
    fontSize: 18,
    lineHeight: 24,
    color: '#371B34',
    fontWeight: '600',
  },

  categories: {
    paddingBottom: 4,
  },

  category: {
    marginRight: 12,
    paddingHorizontal: 15,
    height: 38,
    backgroundColor: '#F4F2F1',
    justifyContent: 'center',
    borderRadius: 10,
  },

  categoryName: {
    fontSize: 14,
    lineHeight: 38,
    color: '#8A8A8A',
    fontWeight: '500',
  },

  button: {
    position: 'absolute',
    right: 25,
    bottom: 25,
    backgroundColor: '#FE8235',
    width: 58,
    height: 58,
    borderRadius: 58 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Community
