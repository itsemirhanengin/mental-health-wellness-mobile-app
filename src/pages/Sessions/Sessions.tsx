import React from 'react'
import { StyleSheet, Text } from 'react-native'

import { Page, Section, TouchableOpacity } from '../../lib/components'
import { Session } from './components/Session'
import { UpcomingSession } from './components/UpcomingSession'
import { IconChevronDown, IconSort } from './icons'

const Sessions: React.FC = () => (
  <Page>
    <UpcomingSession />

    <Section style={styles.heading}>
      <TouchableOpacity style={styles.head}>
        <Text style={styles.title}>All Sessions</Text>

        <IconChevronDown />
      </TouchableOpacity>

      <TouchableOpacity>
        <IconSort />
      </TouchableOpacity>
    </Section>

    <Session active />

    <Session />
  </Page>
)

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  head: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
    color: '#371B34',
    marginRight: 6,
  },
})

export default Sessions
