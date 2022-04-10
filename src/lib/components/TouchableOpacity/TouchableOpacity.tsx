import React from 'react'
import {
  TouchableOpacity as TouchableOpacityNative,
  TouchableOpacityProps,
} from 'react-native'

const TouchableOpacity: React.FC<TouchableOpacityProps> = ({
  children,
  ...props
}) => (
  <TouchableOpacityNative activeOpacity={0.75} {...props}>
    {children}
  </TouchableOpacityNative>
)

export default TouchableOpacity
