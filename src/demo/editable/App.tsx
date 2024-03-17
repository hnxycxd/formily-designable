import React, { useEffect, useMemo } from 'react'
import { createForm, registerValidateLocale } from '@formily/core'
import { createSchemaField } from '@formily/react'
import {
  Form,
  FormItem,
  DatePicker,
  Checkbox,
  Cascader,
  Editable,
  Input,
  NumberPicker,
  Switch,
  Password,
  PreviewText,
  Radio,
  Reset,
  Select,
  Space,
  Submit,
  TimePicker,
  Transfer,
  TreeSelect,
  Upload,
  FormGrid,
  FormLayout,
  FormTab,
  FormCollapse,
  ArrayTable,
  ArrayCards,
} from '@formily/antd'
import { Card, Slider, Rate, Button } from 'antd'
import FormilyTableButton from '../formilyComponents/tableButton'
import TableIndex from '../formilyComponents/cartIndex'
const SchemaField = createSchemaField({
  components: {
    FormilyTableButton,
    TableIndex,
    Space,
    FormGrid,
    FormLayout,
    FormTab,
    FormCollapse,
    ArrayTable,
    ArrayCards,
    FormItem,
    DatePicker,
    Checkbox,
    Cascader,
    Editable,
    Input,
    NumberPicker,
    Switch,
    Password,
    PreviewText,
    Radio,
    Reset,
    Select,
    Submit,
    TimePicker,
    Transfer,
    TreeSelect,
    Upload,
    Card,
    Slider,
    Rate,
  },
  scope: {},
})
registerValidateLocale({
  'zh-CN': {
    required: '此项为必填项',
  },
})

function App() {
  const form = useMemo(
    () =>
      createForm({
        effects: (form) => {},
      }),
    []
  )

  const onSubmit = () => {
    form.submit((values) => {
      console.log('values', values)
    })
  }

  /** 切换编辑、保存状态 */
  const toggleEditable = (activeRow, editable) => {
    form.setFieldState(`${activeRow}.*`, (state) => {
      state.editable = editable
    })
    form.setFieldState(`${activeRow}.save`, (state) => {
      state.visible = editable
    })
    form.setFieldState(`${activeRow}.edit`, (state) => {
      state.visible = !editable
    })
  }

  useEffect(() => {
    const moduleList = [
      {
        fundname: '名称1',
        fundcode: '代码1',
        elementList: [
          { t1: '11', t2: '11', t3: null },
          { t1: '22', t2: '22', t3: null },
          { t1: '33', t2: '23', t3: null },
        ],
      },
    ]
    form.setValues({ moduleList })

    // 因默认都是可编辑的，这里把所有的初识数据设为不可编辑
    moduleList.forEach(({ elementList }, moduleIdx) => {
      Array.from({ length: elementList.length }).forEach((_, elementIdx) => {
        form.setFieldState(`moduleList.${moduleIdx}.elementList.${elementIdx}.*`, (state) => {
          state.editable = false
        })
        form.setFieldState(`moduleList.${moduleIdx}.elementList.${elementIdx}.save`, (state) => {
          state.visible = false
        })
        form.setFieldState(`moduleList.${moduleIdx}.elementList.${elementIdx}.edit`, (state) => {
          state.visible = true
        })
      })
    })
  }, [])

  return (
    <div>
      <Button type='primary' onClick={onSubmit}>
        提交
      </Button>
      <Form form={form}>
        <SchemaField>
          <SchemaField.Array
            x-decorator='FormItem'
            x-component='ArrayCards'
            x-component-props={{ title: '卡片标题' }}
            x-validator={[]}
            name='moduleList'
          >
            <SchemaField.Object x-validator={[]} name='khbdmextytz'>
              <SchemaField.Void x-component='ArrayCards.Remove' name='itci3lj80xj' />
              <SchemaField.Void x-component='ArrayCards.MoveDown' name='lw0grslyohr' />
              <SchemaField.Void x-component='ArrayCards.MoveUp' name='eumh5bd3jyn' />
              <SchemaField.Void
                x-component='FormLayout'
                x-component-props={{
                  labelWidth: 150,
                }}
                name='yoxo524hesf'
              >
                <SchemaField.String
                  title='名称'
                  x-decorator='FormItem'
                  x-component='Input'
                  x-validator={[]}
                  name='fundname'
                />
                <SchemaField.String
                  title='代码'
                  x-decorator='FormItem'
                  x-component='Input'
                  x-validator={[]}
                  name='fundcode'
                />
                <SchemaField.Array
                  x-decorator='FormItem'
                  x-component='ArrayTable'
                  x-validator={[]}
                  name='elementList'
                >
                  <SchemaField.Object name='yvxyd2eul27'>
                    <SchemaField.Void
                      x-component='ArrayTable.Column'
                      x-component-props={{ width: 60 }}
                      name='a2322332'
                    >
                      <SchemaField.Void x-component='ArrayTable.SortHandle' name='848743iu4' />
                    </SchemaField.Void>
                    <SchemaField.Void
                      x-component='ArrayTable.Column'
                      x-component-props={{ title: '序号', width: 60 }}
                      name='io68400ovn8'
                    >
                      <SchemaField.Void x-component='TableIndex' name='0viu9uwtsp6' />
                    </SchemaField.Void>
                    <SchemaField.Void
                      x-component='ArrayTable.Column'
                      x-component-props={{ title: 'Title1' }}
                      name='t12323'
                    >
                      <SchemaField.String
                        required
                        x-decorator='FormItem'
                        x-component='Input'
                        // x-pattern='readPretty'
                        name='t1'
                      />
                    </SchemaField.Void>
                    <SchemaField.Void
                      x-component='ArrayTable.Column'
                      x-component-props={{ title: 'Title2' }}
                      name='sdfsfs'
                    >
                      <SchemaField.String
                        x-decorator='FormItem'
                        x-component='Input'
                        // x-pattern='readPretty'
                        name='t2'
                      />
                    </SchemaField.Void>
                    <SchemaField.Void
                      x-component='ArrayTable.Column'
                      x-component-props={{ title: 'Title3' }}
                      name='lksdjf'
                    >
                      <SchemaField.String
                        required
                        name='t3'
                        x-decorator='FormItem'
                        x-component='Input'
                        // x-pattern='readPretty'
                      />
                    </SchemaField.Void>
                    <SchemaField.Void
                      x-component='ArrayTable.Column'
                      x-component-props={{ title: '操作', width: 150 }}
                      name='31yppnmbxvz'
                    >
                      <SchemaField.Void
                        x-component='FormilyTableButton'
                        name='edit'
                        x-visible={false}
                        x-component-props={{
                          type: 'link',
                          text: '编辑',
                          onClick: ({ arrTable, index }) => {
                            const activeRow = `${arrTable.field.path.entire}.${index}`
                            toggleEditable(activeRow, true)
                          },
                        }}
                      />
                      <SchemaField.Void
                        x-component='FormilyTableButton'
                        name='save'
                        x-component-props={{
                          type: 'link',
                          text: '保存',
                          onClick: ({ arrTable, index }) => {
                            const activeRow = `${arrTable.field.path.entire}.${index}`

                            form
                              .validate(`${activeRow}.*`)
                              .then(() => toggleEditable(activeRow, false))
                              .catch((err) => {
                                const errIndex = err.map((item) => {
                                  const pathArr = item.path.split('.')
                                  const idx = pathArr[pathArr.length - 2]
                                  return idx
                                })
                                if (!errIndex.includes(String(index))) {
                                  toggleEditable(activeRow, false)
                                }
                              })
                          },
                        }}
                      />
                      <SchemaField.Void
                        x-component='FormilyTableButton'
                        name='delete'
                        x-component-props={{
                          type: 'link',
                          text: '删除',
                          onClick: ({ arrTable, index }) => arrTable.field.remove(index),
                        }}
                      />
                    </SchemaField.Void>
                  </SchemaField.Object>
                  <SchemaField.Void
                    title='新增一行'
                    x-component='ArrayTable.Addition'
                    name='table_addition'
                    x-component-props={{
                      className: 'my-add-button',
                      onClick: (e) => {
                        console.log('onclick e', e)
                      },
                    }}
                  />
                </SchemaField.Array>
              </SchemaField.Void>
              <SchemaField.Void x-component='ArrayCards.Index' name='card_index' />
            </SchemaField.Object>

            <SchemaField.Void
              title='新增卡片'
              x-component='ArrayCards.Addition'
              name='card_addition'
            />
          </SchemaField.Array>
        </SchemaField>
      </Form>
    </div>
  )
}

export default App
