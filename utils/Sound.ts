/* https://wiki.rage.mp/index.php?title=Audio::playSound */
class Sound {
	private soundId: number;
	private audioName: string;
	private audioRef: string;
	private p3: boolean;
	private p4: number;
	private p5: boolean;

	public constructor(audioName: string, audioRef: string = "HUD_FRONTEND_DEFAULT_SOUNDSET", soundId: number = -1, p3: boolean = false, p4: number = 0, p5: boolean = true) {
		this.soundId = soundId;
		this.audioName = audioName;
		this.audioRef = audioRef;
		this.p3 = p3;
		this.p4 = p4;
		this.p5 = p5;
	}

	public playSound(): void {
		mp.game.audio.playSound(this.soundId, this.audioName, this.audioRef, this.p3, this.p4, this.p5);
	}
}