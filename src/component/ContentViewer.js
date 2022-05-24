import ReactMarkdown from "react-markdown";
import dayjs from "dayjs";
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ContentViewer({ children, showMeta = true }) {
    return <article className="pb-20">
        <div className="py-6 md:py-16 space-y-2 md:space-y-4">
            <div className="text-xl font-bold md:text-4xl">{children.title}</div>
            {showMeta && <div className="text-stone-500">发布于 {dayjs(children.published_at).format('YYYY-MM-DD HH:mm')}</div>}
        </div>
        <div className="content-entity prose lg:prose-xl max-w-none prose-pre:p-0">
            <ReactMarkdown
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline
                            ? (<SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                style={prism}
                                language={match ? match[1] : ''}
                                PreTag="div"
                                {...props} />)
                            : (<code className={className} {...props}>{children}</code>);
                    }
                }}
            >
                {children.entity.data}
            </ReactMarkdown>
        </div>
    </article>;
}

export default ContentViewer