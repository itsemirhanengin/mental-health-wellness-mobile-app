import React from 'react'
import { StyleSheet, Text } from 'react-native'

import { Page, Section, TouchableOpacity } from '../../lib/components'
import { Session } from './components/Session'
import { UpcomingSession } from './components/UpcomingSession'
import { IconChevronDown, IconSort } from './icons'

const Sessions: React.FC = () => (
  <Page>
    <UpcomingSession
      title="Upcoming Session"
      description="Sahana V, Msc in Clinical Psychology"
      date="7:30 PM - 8:30 PM"
      onPress={() => console.log('pressed')}
    />

    <Section style={styles.heading}>
      <TouchableOpacity style={styles.head}>
        <Text style={styles.title}>All Sessions</Text>

        <IconChevronDown />
      </TouchableOpacity>

      <TouchableOpacity>
        <IconSort />
      </TouchableOpacity>
    </Section>

    <Session
      active
      avatar={require('../../lib/assets/avatar-2.png')}
      name="Sahana V"
      job="Msc in Clinical Psychology"
      date="31st March ‘22"
      hours="7:30 PM - 8:30 PM"
      onPressReschedule={() => console.log('reschedule')}
      onPressReBook={() => console.log('rebook')}
      onPressJoinNow={() => console.log('join now')}
      onPressViewProfile={() => console.log('view profile')}
    />

    <Session
      avatar={require('../../lib/assets/avatar-3.png')}
      name="Sahana V"
      job="Msc in Clinical Psychology"
      date="31st March ‘22"
      hours="7:30 PM - 8:30 PM"
      onPressReschedule={() => console.log('reschedule')}
      onPressReBook={() => console.log('rebook')}
      onPressJoinNow={() => console.log('join now')}
      onPressViewProfile={() => console.log('view profile')}
    />
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
