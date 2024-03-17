import React from 'react'
import { Button, type ButtonProps } from 'antd'
import { ArrayTable } from '@formily/antd'
import { useField } from '@formily/react'

interface FormilyTableButtonProps extends ButtonProps {
  text?: string
  onClick?: (...arg: any[]) => void
}

const FormilyTableButton = ({ text = 'Button', onClick, ...props }: FormilyTableButtonProps) => {
  const arrTable = ArrayTable.useArray()
  const index = ArrayTable.useIndex()
  const field = useField()

  const handleClick = () => {
    onClick?.({ arrTable, field, index })
  }

  return (
    <Button {...props} onClick={handleClick}>
      {text}
    </Button>
  )
}

export default FormilyTableButton
