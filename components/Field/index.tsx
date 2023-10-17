import Link from 'next/link'
import cn from 'classnames'
import styles from './Field.module.sass'
import Icon from '@/components/Icon'

export type FieldProps = {
    className?: string
    label?: string
    icon?: string
    iconProps?: any
    addon?: any
    textarea?: boolean
    type?: string
    value?: string
    name?: string
    helperText?: any
    error?: boolean
    onChange?: any
    onBlur?: any
    url?: string
    urlContent?: string
    placeholder?: string
    required?: boolean
    autoFocus?: any
    disabled?: boolean
}

const Field = ({
    className,
    label,
    icon,
    iconProps,
    addon,
    name,
    error,
    helperText,
    textarea,
    type,
    value,
    onChange,
    url,
    urlContent,
    placeholder,
    required,
    autoFocus,
    disabled,
}: FieldProps) => (
    <div
        className={cn(
            styles.field,
            { [styles.fieldTextarea]: textarea },
            { [styles.fieldIcon]: icon },
            className,
        )}>
        {label && <div className={styles.label}>{label}</div>}
        {url && (
            <Link href={url} className={cn('h5', styles.link)}>
                {urlContent}
            </Link>
        )}
        <div className={styles.wrap}>
            {textarea ? (
                <textarea
                    className={styles.textarea}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    autoFocus={autoFocus}
                    disabled={disabled}
                    name={name}></textarea>
            ) : (
                <input
                    className={`${styles.input} ${
                        error ? styles.errorBorder : ''
                    }`}
                    type={type || 'text'}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    autoFocus={autoFocus}
                    disabled={disabled}
                />
            )}
            {icon && (
                <div className={styles.icon}>
                    <Icon name={icon} {...iconProps} size="32" />
                </div>
            )}
            {addon && <div className={styles.addon}>{addon}</div>}
        </div>

        {helperText && (
            <p className={'text-sm mt-2 text-red-600 dark:text-red-400 '}>
                {helperText}
            </p>
        )}
    </div>
)

export default Field
