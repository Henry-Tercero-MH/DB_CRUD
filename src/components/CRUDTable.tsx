import React from 'react';
import { Edit, Trash2 } from 'lucide-react';

interface CRUDTableProps<T> {
  data: T[];
  columns: { key: keyof T; header: string }[];
  onEdit: (item: T) => void;
  onDelete: (item: T) => void;
}

function CRUDTable<T>({ data, columns, onEdit, onDelete }: CRUDTableProps<T>) {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {columns.map((column) => (
                    <th
                      key={column.key as string}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {column.header}
                    </th>
                  ))}
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Acciones</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((item, index) => (
                  <tr key={index}>
                    {columns.map((column) => (
                      <td
                        key={column.key as string}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >
                        {String(item[column.key])}
                      </td>
                    ))}
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => onEdit(item)}
                        className="text-indigo-600 hover:text-indigo-900 mr-2"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => onDelete(item)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CRUDTable;