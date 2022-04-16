import React from 'react'
import { StyleSheet, Text } from 'react-native'

import { Page, Section, TouchableOpacity } from '../../lib/components'

const Community: React.FC = () => (
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
    </Section>
  </Page>
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
})

export default Community
