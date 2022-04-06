import React from 'react'
import { ScrollView, ScrollViewProps, View, ViewProps } from 'react-native'

interface Props extends ViewProps, ScrollViewProps {
  padding?: number
  scrollable?: boolean
}

const Section: React.FC<Props> = ({
  children,
  padding = 25,
  scrollable = false,
  style,
  ...props
}) => {
  const containerStyles = {
    paddingHorizontal: padding,
  }

  if (scrollable) {
    return (
      <ScrollView contentContainerStyle={[containerStyles, style]} {...props}>
        {children}
      </ScrollView>
    )
  }

  return (
    <View style={[containerStyles, style]} {...props}>
      {children}
    </View>
  )
}

export default Section
