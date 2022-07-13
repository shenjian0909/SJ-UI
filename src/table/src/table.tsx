
import { defineComponent } from "vue";

import { TableProps, tableProps } from "./table-type";
import TableColumn from './tableColumn'

export default defineComponent({
  name: 'MTable',
  props: tableProps,
  setup(props: TableProps) {
    const { columns, data: tableData } = props
    console.log(columns, tableData);
    
    return () => {
      return <div class="s-table">
        <table>
          <thead>
            <tr>
              {
              columns.map(column => {
                return <th>{column.label}</th>
              })
              }
            </tr>
          </thead>
          <tbody>
              {tableData.map(item => {
                return <tr>
                  {
                    columns.map(column => {
                      return <td>{item[column.prop]}</td>
                    })
                  }
              </tr>
              })}
          </tbody>
        </table>
      </div>
    }
  }
})
  