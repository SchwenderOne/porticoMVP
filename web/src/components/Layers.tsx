const imgGroup = '/topbar-assets/21831f4952a736517f8953224be8acdd39877775.svg'

export default function Layers() {
	return (
		<div className="relative size-full" data-name="layers" data-node-id="10:446">
			<div
				className="absolute"
				style={{ left: 0, top: 0, width: 101, height: 44, borderRadius: 27.867, backdropFilter: 'blur(17.65px)', background: 'rgba(229,229,229,0.5)' }}
				data-node-id="10:448"
			>
				<div aria-hidden className="absolute pointer-events-none" style={{ inset: 0, border: '1.858px solid #e9e9e9', borderRadius: 27.867 }} />
				<div className="absolute" style={{ left: 14, top: 11, width: 22, height: 22 }} data-name="Group" data-node-id="10:450">
					<img alt="" className="block max-w-none size-full" src={imgGroup} />
				</div>
				<div className="absolute" style={{ left: 45, top: 12, width: 56, height: 20, color: '#343434', fontSize: 18, lineHeight: '20px', textAlign: 'center' }} data-node-id="10:449">
					Layers
				</div>
			</div>
		</div>
	)
}
