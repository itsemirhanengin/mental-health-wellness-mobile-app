import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import { Section, TouchableOpacity } from '../../../../lib/components'
import { IconCalendar, IconClock } from './icons'

type Props = {
  active?: boolean
}

const Session: React.FC<Props> = ({ active = false }) => (
  <Section style={styles.section}>
    <View
      style={[
        styles.container,
        { backgroundColor: active ? '#FEF3E7' : '#F8F6F5' },
      ]}
    >
      <View style={styles.heading}>
        <View style={styles.avatar}>
          <Image
            source={require('../../../../lib/assets/avatar-2.png')}
            style={{ width: 32, height: 32 }}
          />
        </View>

        <View>
          <Text style={styles.name}>Sahana V</Text>

          <Text style={styles.job}>Msc in Clinical Psychology</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.item}>
          <View style={styles.icon}>
            <IconCalendar />
          </View>

          <Text style={styles.text}>31st March ‘22</Text>
        </View>

        <View style={[styles.item, { marginRight: 0 }]}>
          <View style={styles.icon}>
            <IconClock />
          </View>

          <Text style={styles.text}>7:30 PM - 8:30 PM</Text>
        </View>
      </View>

      {active && (
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Reschedule</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              { marginRight: 0, backgroundColor: 'transparent' },
            ]}
          >
            <Text style={[styles.buttonText, { color: '#FE8235' }]}>
              Join Now
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {!active && (
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Re-book</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              { marginRight: 0, backgroundColor: 'transparent' },
            ]}
          >
            <Text style={[styles.buttonText, { color: '#FE8235' }]}>
              View Profile
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  </Section>
)

const styles = StyleSheet.create({
  section: {
    marginBottom: 12,
  },

  container: {
    backgroundColor: '#FEF3E7',
    borderRadius: 16,
    paddingTop: 20,
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 15,
  },

  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(217, 216, 216, 0.3)',
  },

  avatar: {
    width: 36,
    height: 36,
    marginRight: 18,
    borderWidth: 2,
    borderColor: 'rgba(240, 158, 84, 0.48)',
    borderRadius: 35,
  },

  name: {
    fontSize: 14,
    lineHeight: 18,
    color: '#573926',
    fontWeight: '700',
    marginBottom: 2,
  },

  job: {
    fontSize: 12,
    lineHeight: 18,
    color: '#573926',
    fontWeight: '500',
  },

  body: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 14,
  },

  item: {
    marginRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    marginRight: 6,
  },

  text: {
    fontSize: 12,
    lineHeight: 18,
    color: '#707070',
    fontWeight: '500',
  },

  footer: {
    flexDirection: 'row',
  },

  button: {
    backgroundColor: '#FE8235',
    borderRadius: 10,
    paddingHorizontal: 16,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    width: 120,
  },

  buttonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
  },
})

export default Session
