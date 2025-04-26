
import React from "react"

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className = "", ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <table
        ref={ref}
        className={`w-full caption-bottom text-sm ${className}`}
        {...props}
      />
    </div>
  )
)
Table.displayName = "Table"

interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className = "", ...props }, ref) => (
    <thead ref={ref} className={`border-b ${className}`} {...props} />
  )
)
TableHeader.displayName = "TableHeader"

interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className = "", ...props }, ref) => (
    <tbody ref={ref} className={className} {...props} />
  )
)
TableBody.displayName = "TableBody"

interface TableFooterProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

const TableFooter = React.forwardRef<HTMLTableSectionElement, TableFooterProps>(
  ({ className = "", ...props }, ref) => (
    <tfoot
      ref={ref}
      className={`border-t bg-gray-100 font-medium dark:bg-gray-800 ${className}`}
      {...props}
    />
  )
)
TableFooter.displayName = "TableFooter"

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {}

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className = "", ...props }, ref) => (
    <tr
      ref={ref}
      className={`border-b transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${className}`}
      {...props}
    />
  )
)
TableRow.displayName = "TableRow"

interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {}

const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className = "", ...props }, ref) => (
    <th
      ref={ref}
      className={`h-12 px-4 text-left align-middle font-medium text-gray-500 dark:text-gray-400 ${className}`}
      {...props}
    />
  )
)
TableHead.displayName = "TableHead"

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {}

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className = "", ...props }, ref) => (
    <td
      ref={ref}
      className={`p-4 align-middle ${className}`}
      {...props}
    />
  )
)
TableCell.displayName = "TableCell"

interface TableCaptionProps extends React.HTMLAttributes<HTMLTableCaptionElement> {}

const TableCaption = React.forwardRef<HTMLTableCaptionElement, TableCaptionProps>(
  ({ className = "", ...props }, ref) => (
    <caption
      ref={ref}
      className={`mt-4 text-sm text-gray-500 dark:text-gray-400 ${className}`}
      {...props}
    />
  )
)
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
